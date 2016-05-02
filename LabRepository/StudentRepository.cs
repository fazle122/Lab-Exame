using LabModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabRepository
{
    public class StudentRepository : BaseRepository<Student>
    {
        public StudentRepository(LabDBContext db):base(db)
        {

        }
    }
}
