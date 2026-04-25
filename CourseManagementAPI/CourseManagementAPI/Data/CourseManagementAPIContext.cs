using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CourseManagementAPI.Models;

namespace CourseManagementAPI.Data
{
    public class CourseManagementAPIContext : DbContext
    {
        public CourseManagementAPIContext (DbContextOptions<CourseManagementAPIContext> options)
            : base(options)
        {
        }

        public DbSet<CourseManagementAPI.Models.Course> Course { get; set; } = default!;
    }
}
