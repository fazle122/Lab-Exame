using LabModel;
using LibraryRequestModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace LabRequestModel
{

    public class StudentRequestModels : RequestModel<Student>
    {
        public StudentRequestModels(string keyword, string orderBy, string isAscending) : base(keyword, orderBy, isAscending)
        {
        }

        protected override Expression<Func<Student, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.ToLower().Contains(Keyword);
            }

            return ExpressionObj;
        }
    }

    public class CourseRequestModels : RequestModel<Course>
    {
        public CourseRequestModels(string keyword, string orderBy, string isAscending) : base(keyword, orderBy, isAscending)
        {
        }

        protected override Expression<Func<Course, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.ToLower().Contains(Keyword);
            }

            return ExpressionObj;
        }
    }
}
