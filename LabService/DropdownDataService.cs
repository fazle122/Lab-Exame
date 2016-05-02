using LabModel;
using LabViewModel;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace LabService
{
    public class DropdownDataService
    {
        public LabDBContext DB;

        public DropdownDataService(LabDBContext db)
        {
            this.DB = db;
        }

        public List<DropdwonViewModel> GetList(string name)
        {
            DB = new LabDBContext();
            switch (name)
            {
                case "course":
                    var c = DB.Courses.Select(x => new DropdwonViewModel() { ID = x.ID, Name = x.Name }).ToList();
                    return c;
                case "student":
                    var std = DB.Students.Select(x => new DropdwonViewModel() { ID = x.ID, Name = x.Name }).ToList();
                    return std;
                default:
                    return null;
            }
        }

    }
}
