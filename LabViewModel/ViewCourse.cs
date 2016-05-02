using LabModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabViewModel
{
    public class ViewCourse
    {
        public ViewCourse(Course course)
        {
            course.Name = Name;
            course.Fee = Fee;
        }
        public string Name { get; set; }
        public double Fee { get; set; }
    }
}
