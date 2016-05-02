using LabModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabViewModel
{
    public class ViewStudent
    {
        public ViewStudent(Student std)
        {
            std.Name = Name;
            std.Age = Age;
            std.Phone = Phone;
            std.Email = Email;
            std.Address = Address;
        }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}
