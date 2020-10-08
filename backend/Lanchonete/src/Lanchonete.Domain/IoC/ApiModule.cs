using Lanchonete.Domain.Repositories;
using Lanchonete.Domain.Repositories.Abstraction;
using Lanchonete.Domain.Services;
using Lanchonete.Domain.Services.Abstraction;
using Microsoft.Extensions.DependencyInjection;

namespace Lanchonete.Domain.IoC
{
    public class ApiModule
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<ILancheService, LancheService>();
            services.AddSingleton<ILancheRepository, LancheRepository>();
        }
    }
}