using LabModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabRepository
{
    public class CourseRepository : BaseRepository<Course>
    {
        public CourseRepository(LabDBContext db):base(db)
        {

        }
    }
}
