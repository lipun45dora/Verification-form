
using API.Helpers;
//using API.Interfaces;


using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,IConfiguration config)
      {
         
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
           
            return services;
      }
    }
}