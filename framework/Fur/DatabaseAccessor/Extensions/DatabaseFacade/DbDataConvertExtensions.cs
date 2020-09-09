﻿// -----------------------------------------------------------------------------
// Fur 是 .NET 5 平台下极易入门、极速开发的 Web 应用框架。
// Copyright © 2020 Fur, Baiqian Co.,Ltd.
//
// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0
// 源码地址：https://gitee.com/monksoul/Fur
// 开源协议：Apache-2.0（http://www.apache.org/licenses/LICENSE-2.0）
// -----------------------------------------------------------------------------

using Fur.Extensions;
using Fur.FriendlyException;
using Mapster;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Fur.DatabaseAccessor
{
    /// <summary>
    /// 数据库数据转换拓展
    /// </summary>
    public static class DbDataConvertExtensions
    {
        /// <summary>
        /// 将模型转为 SqlParameter 集合
        /// </summary>
        /// <param name="model">模型</param>
        /// <returns>SqlParameter[]</returns>
        public static SqlParameter[] ToSqlParameters(this object model)
        {
            var sqlParameters = new List<SqlParameter>();

            var modelType = model?.GetType();
            if (model == null || !modelType.IsClass) return sqlParameters.ToArray();

            // 获取所有公开实例属性
            var properties = modelType.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            if (properties.Length == 0) return sqlParameters.ToArray();

            // 遍历所有属性
            foreach (var property in properties)
            {
                var propertyValue = property.GetValue(model) ?? DBNull.Value;

                // 判断属性是否贴有 [DbParameter] 特性
                if (property.IsDefined(typeof(DbParameterAttribute), true))
                {
                    var dbParameterAttribute = property.GetCustomAttribute<DbParameterAttribute>(true);
                    sqlParameters.Add(DbHelpers.CreateSqlParameter(property.Name, propertyValue, dbParameterAttribute));
                    continue;
                }
                sqlParameters.Add(new SqlParameter(property.Name, propertyValue));
            }

            return sqlParameters.ToArray();
        }

        /// <summary>
        /// 将参数类型转 SqlParameter 集合
        /// </summary>
        /// <param name="parameters">参数</param>
        /// <param name="arguments">参数值</param>
        /// <returns>SqlParameter[]</returns>
        public static SqlParameter[] ToSqlParameters(this ParameterInfo[] parameters, object[] arguments)
        {
            var sqlParameters = new List<SqlParameter>();
            if (parameters == null || parameters.Length == 0) return sqlParameters.ToArray();

            // 只支持要么全是基元类型，或全部都是类类型
            if (!parameters.All(u => u.ParameterType.IsRichPrimitive()) && !parameters.All(u => u.ParameterType.IsClass))
                throw Oops.Oh("Invalid type cast", typeof(InvalidOperationException));

            // 处理基元类型参数
            if (parameters.All(u => u.ParameterType.IsRichPrimitive()))
            {
                for (var i = 0; i < parameters.Length; i++)
                {
                    var parameter = parameters[i];
                    var parameterValue = (arguments.Length > i ? arguments[i] : null) ?? DBNull.Value;

                    // 判断属性是否贴有 [DbParameter] 特性
                    if (parameter.IsDefined(typeof(DbParameterAttribute), true))
                    {
                        var dbParameterAttribute = parameter.GetCustomAttribute<DbParameterAttribute>(true);
                        sqlParameters.Add(DbHelpers.CreateSqlParameter(parameter.Name, parameterValue, dbParameterAttribute));
                        continue;
                    }
                    sqlParameters.Add(new SqlParameter(parameter.Name, parameterValue));
                }
            }
            // 处理类类型参数
            else
            {
                foreach (var argument in arguments)
                {
                    sqlParameters.AddRange(argument.ToSqlParameters());
                }
            }

            return sqlParameters.ToArray();
        }

        /// <summary>
        /// 将 DataTable 转 List 集合
        /// </summary>
        /// <typeparam name="T">返回值类型</typeparam>
        /// <param name="dataTable">DataTable</param>
        /// <returns>List<T></returns>
        public static List<T> ToList<T>(this DataTable dataTable)
        {
            return dataTable.ToList(typeof(List<T>)).Adapt<List<T>>();
        }

        /// <summary>
        /// 将 DataTable 转 List 集合
        /// </summary>
        /// <typeparam name="T">返回值类型</typeparam>
        /// <param name="dataTable">DataTable</param>
        /// <returns>List<T></returns>
        public static async Task<List<T>> ToListAsync<T>(this DataTable dataTable)
        {
            var list = await dataTable.ToListAsync(typeof(List<T>));
            return list.Adapt<List<T>>();
        }

        /// <summary>
        /// 将 DataTable 转 特定类型
        /// </summary>
        /// <param name="dataTable">DataTable</param>
        /// <param name="returnType">返回值类型</param>
        /// <returns>object</returns>
        public static object ToList(this DataTable dataTable, Type returnType)
        {
            var isGenericType = returnType.IsGenericType;
            // 获取类型真实返回类型
            var underlyingType = isGenericType ? returnType.GenericTypeArguments.First() : returnType;

            var list = new List<object>();

            // 将 DataTable 转为行集合
            var dataRows = dataTable.AsEnumerable();

            // 如果是基元类型
            if (underlyingType.IsRichPrimitive())
            {
                // 遍历所有行
                foreach (var dataRow in dataRows)
                {
                    // 只取第一列数据
                    var firstColumnValue = dataRow[0];
                    // 转换成目标类型数据
                    var destValue = firstColumnValue.ChangeType(underlyingType);
                    // 添加到集合中
                    list.Add(destValue);
                }
            }
            else
            {
                // 获取所有的数据列和类公开实例属性
                var dataColumns = dataTable.Columns;
                var properties = underlyingType.GetProperties(BindingFlags.Public | BindingFlags.Instance).Where(p => !p.IsDefined(typeof(NotMappedAttribute), true));

                // 遍历所有行
                foreach (var dataRow in dataRows)
                {
                    var model = Activator.CreateInstance(underlyingType);

                    // 遍历所有属性并一一赋值
                    foreach (var property in properties)
                    {
                        // 获取属性对应的真实列名
                        var columnName = property.Name;
                        if (property.IsDefined(typeof(ColumnAttribute), true))
                        {
                            var columnAttribute = property.GetCustomAttribute<ColumnAttribute>(true);
                            if (!string.IsNullOrEmpty(columnAttribute.Name)) columnName = columnAttribute.Name;
                        }

                        // 如果 DataTable 不包含该列名，则跳过
                        if (!dataColumns.Contains(columnName)) continue;

                        // 获取列值
                        var columnValue = dataRow[columnName];
                        // 如果列值未空，则跳过
                        if (columnValue == DBNull.Value) continue;

                        // 转换成目标类型数据
                        var destValue = columnValue.ChangeType(property.PropertyType);
                        property.SetValue(model, destValue);
                    }

                    // 添加到集合中
                    list.Add(model);
                }
            }

            return isGenericType ? list : list.FirstOrDefault();
        }

        /// <summary>
        /// 将 DataTable 转 特定类型
        /// </summary>
        /// <param name="dataTable">DataTable</param>
        /// <param name="returnType">返回值类型</param>
        /// <returns>object</returns>
        public static Task<object> ToListAsync(this DataTable dataTable, Type returnType)
        {
            return Task.FromResult(dataTable.ToList(returnType));
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static List<T1> ToList<T1>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>)).Adapt<List<T1>>();
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <typeparam name="T2">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static (List<T1> list1, List<T2> list2) ToList<T1, T2>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>), typeof(List<T2>)).Adapt<(List<T1>, List<T2>)>();
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <typeparam name="T2">元组元素类型</typeparam>
        /// <typeparam name="T3">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static (List<T1> list1, List<T2> list2, List<T3> list3) ToList<T1, T2, T3>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>), typeof(List<T2>), typeof(List<T3>)).Adapt<(List<T1>, List<T2>, List<T3>)>();
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <typeparam name="T2">元组元素类型</typeparam>
        /// <typeparam name="T3">元组元素类型</typeparam>
        /// <typeparam name="T4">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static (List<T1> list1, List<T2> list2, List<T3> list3, List<T4> list4) ToList<T1, T2, T3, T4>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>), typeof(List<T2>), typeof(List<T3>), typeof(List<T4>)).Adapt<(List<T1>, List<T2>, List<T3>, List<T4>)>();
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <typeparam name="T2">元组元素类型</typeparam>
        /// <typeparam name="T3">元组元素类型</typeparam>
        /// <typeparam name="T4">元组元素类型</typeparam>
        /// <typeparam name="T5">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static (List<T1> list1, List<T2> list2, List<T3> list3, List<T4> list4, List<T5> list5) ToList<T1, T2, T3, T4, T5>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>), typeof(List<T2>), typeof(List<T3>), typeof(List<T4>), typeof(List<T5>)).Adapt<(List<T1>, List<T2>, List<T3>, List<T4>, List<T5>)>();
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <typeparam name="T2">元组元素类型</typeparam>
        /// <typeparam name="T3">元组元素类型</typeparam>
        /// <typeparam name="T4">元组元素类型</typeparam>
        /// <typeparam name="T5">元组元素类型</typeparam>
        /// <typeparam name="T6">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static (List<T1> list1, List<T2> list2, List<T3> list3, List<T4> list4, List<T5> list5, List<T6> list6) ToList<T1, T2, T3, T4, T5, T6>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>), typeof(List<T2>), typeof(List<T3>), typeof(List<T4>), typeof(List<T5>), typeof(List<T6>)).Adapt<(List<T1>, List<T2>, List<T3>, List<T4>, List<T5>, List<T6>)>();
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <typeparam name="T2">元组元素类型</typeparam>
        /// <typeparam name="T3">元组元素类型</typeparam>
        /// <typeparam name="T4">元组元素类型</typeparam>
        /// <typeparam name="T5">元组元素类型</typeparam>
        /// <typeparam name="T6">元组元素类型</typeparam>
        /// <typeparam name="T7">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static (List<T1> list1, List<T2> list2, List<T3> list3, List<T4> list4, List<T5> list5, List<T6> list6, List<T7> list7) ToList<T1, T2, T3, T4, T5, T6, T7>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>), typeof(List<T2>), typeof(List<T3>), typeof(List<T4>), typeof(List<T5>), typeof(List<T6>), typeof(List<T7>)).Adapt<(List<T1>, List<T2>, List<T3>, List<T4>, List<T5>, List<T6>, List<T7>)>();
        }

        /// <summary>
        /// 将 DataSet 转 元组
        /// </summary>
        /// <typeparam name="T1">元组元素类型</typeparam>
        /// <typeparam name="T2">元组元素类型</typeparam>
        /// <typeparam name="T3">元组元素类型</typeparam>
        /// <typeparam name="T4">元组元素类型</typeparam>
        /// <typeparam name="T5">元组元素类型</typeparam>
        /// <typeparam name="T6">元组元素类型</typeparam>
        /// <typeparam name="T7">元组元素类型</typeparam>
        /// <typeparam name="T8">元组元素类型</typeparam>
        /// <param name="dataSet">DataSet</param>
        /// <returns>元组类型</returns>
        public static (List<T1> list1, List<T2> list2, List<T3> list3, List<T4> list4, List<T5> list5, List<T6> list6, List<T7> list7, List<T8> list8) ToList<T1, T2, T3, T4, T5, T6, T7, T8>(this DataSet dataSet)
        {
            return dataSet.ToList(typeof(List<T1>), typeof(List<T2>), typeof(List<T3>), typeof(List<T4>), typeof(List<T5>), typeof(List<T6>), typeof(List<T7>), typeof(List<T8>)).Adapt<(List<T1>, List<T2>, List<T3>, List<T4>, List<T5>, List<T6>, List<T7>, List<T8>)>();
        }

        /// <summary>
        /// 将 DataSet 转 特定类型
        /// </summary>
        /// <param name="dataSet">DataSet</param>
        /// <param name="returnTypes">特定类型集合</param>
        /// <returns>object</returns>
        public static object ToList(this DataSet dataSet, params Type[] returnTypes)
        {
            if (returnTypes == null || returnTypes.Length == 0) return default;

            // 处理元组类型
            if (returnTypes.Length == 1 && returnTypes[0].IsValueType)
            {
                returnTypes = returnTypes[0].GenericTypeArguments;
            }

            // 获取所有的 DataTable
            var dataTables = dataSet.Tables;

            // 处理 8 个结果集
            if (returnTypes.Length >= 8)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]), dataTables[5].ToList(returnTypes[5]), dataTables[6].ToList(returnTypes[6]), dataTables[7].ToList(returnTypes[7]));
            }
            // 处理 7 个结果集
            else if (returnTypes.Length == 7)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]), dataTables[5].ToList(returnTypes[5]), dataTables[6].ToList(returnTypes[6]));
            }
            // 处理 6 个结果集
            else if (returnTypes.Length == 6)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]), dataTables[5].ToList(returnTypes[5]));
            }
            // 处理 5 个结果集
            else if (returnTypes.Length == 5)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]), dataTables[4].ToList(returnTypes[4]));
            }
            // 处理 4 个结果集
            else if (returnTypes.Length == 4)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]), dataTables[3].ToList(returnTypes[3]));
            }
            // 处理 3 个结果集
            else if (returnTypes.Length == 3)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]), dataTables[2].ToList(returnTypes[2]));
            }
            // 处理 2 个结果集
            else if (returnTypes.Length == 2)
            {
                return (dataTables[0].ToList(returnTypes[0]), dataTables[1].ToList(returnTypes[1]));
            }
            // 处理 1 个结果集
            else
            {
                return (dataTables[0].ToList(returnTypes[0]));
            }
        }

        /// <summary>
        /// 将 DataSet 转 特定类型
        /// </summary>
        /// <param name="dataSet">DataSet</param>
        /// <param name="returnTypes">特定类型集合</param>
        /// <returns>object</returns>
        public static Task<object> ToListAsync(this DataSet dataSet, params Type[] returnTypes)
        {
            return Task.FromResult(dataSet.ToList(returnTypes));
        }
    }
}