using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabModel
{
    public class Student : Entity
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        [ForeignKey("Course")]
        public string CourseId { get; set;  }        
        public virtual Course Course { get; set; }

        public double Due { get; set; }
       
        
    }
}
