using JBO.Entities.Entities;
using JBO.Logic.Interface;
using JBO.Repository.Interface;
using System.Collections.Generic;

namespace JBO.Logic
{
    public class ProjectManagementLogic : IProjectManagementLogic
    {
        private readonly IProjectManagementRepository _projectManagementRepository;

        public ProjectManagementLogic(IProjectManagementRepository projectManagementRepository)
        {
            _projectManagementRepository = projectManagementRepository;
        }

        public IEnumerable<Project> GetAll()
        {
            return _projectManagementRepository.GetAll();
        }

        public Project Get(int id)
        {
            return _projectManagementRepository.Get(id);
        }

        public void Add(Project entity)
        {
            _projectManagementRepository.Add(entity);
        }

        public void Delete(int id)
        {
            _projectManagementRepository.Delete(id);
        }

        public void Update(Project entity)
        {
            _projectManagementRepository.Update(entity);
        }
    }
}
