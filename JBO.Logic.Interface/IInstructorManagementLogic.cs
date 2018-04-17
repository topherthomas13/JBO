using JBO.Entities.Entities;
using System.Collections.Generic;

namespace JBO.Logic.Interface
{
    public interface IInstructorManagementLogic
    {
        IEnumerable<Instructor> GetAll();
        Instructor Get(int id);
        void Add(Instructor entity);
        void Delete(int id);
        void Update(Instructor entity);
        void ChangeInstructorStatus(int id, bool status);
    }
}
