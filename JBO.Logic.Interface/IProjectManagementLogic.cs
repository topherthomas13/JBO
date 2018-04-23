using JBO.Entities.Entities;
using System.Collections.Generic;

namespace JBO.Logic.Interface
{
    public interface IProjectManagementLogic
    {
        IEnumerable<Project> GetAll();
        Project Get(int id);
        void Add(Project entity);
        void Delete(int id);
        void Update(Project entity);
        void ChangeProjectStatus(int id, bool status);
    }
}
