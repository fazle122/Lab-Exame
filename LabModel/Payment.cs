using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabModel
{
    public class Payment :Entity
    {
        [ForeignKey("Student")]
        public string StudentId { get; set; }
        public Student Student { get; set; }
        public double Amount { get; set; }

    }
}
