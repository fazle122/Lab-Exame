﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LabModel
{
    public class Course: Entity
    {
        public string Name { get; set; }
        public double Fee { get; set; }
    }
}
