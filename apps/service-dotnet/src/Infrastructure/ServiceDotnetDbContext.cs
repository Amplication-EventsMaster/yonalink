using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ServiceDotnet.Infrastructure;

public class ServiceDotnetDbContext : IdentityDbContext<IdentityUser>
{
    public ServiceDotnetDbContext(DbContextOptions<ServiceDotnetDbContext> options)
        : base(options) { }
}
