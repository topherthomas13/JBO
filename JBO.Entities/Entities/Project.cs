using System;
using System.Collections.Generic;
using System.Text;

namespace JBO.Entities.Entities
{
    public class Project
    {
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
        public bool IsActive { get; set; }
    }
}
