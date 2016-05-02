using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabModel
{
    public class LabDBContext : DbContext
    {
        public LabDBContext(): base("LabDbContext")
        {

        }

        public static LabDBContext Create()
        {
            return new LabDBContext();
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Payment> Payments { get; set; }
    }
}
