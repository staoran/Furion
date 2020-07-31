﻿using Autofac;
using Fur.AppBasic;
using Fur.AppBasic.Attributes;
using System.Linq;

namespace Fur.DependencyInjection
{
    /// <summary>
    /// 依赖注入初始化类
    /// </summary>
    [NonWrapper]
    public sealed class Injection
    {
        /// <summary>
        /// 初始化程序集模块注册
        /// </summary>
        /// <param name="builder">容器构建器</param>
        public static void Initialize(ContainerBuilder builder)
            => builder.RegisterAssemblyModules(App.Application.AssemblyWrappers.Select(a => a.Assembly).ToArray());
    }
}