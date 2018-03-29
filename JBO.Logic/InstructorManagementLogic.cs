using JBO.Entities.Entities;
using JBO.Logic.Interface;
using JBO.Repository.Interface;
using System.Collections.Generic;

namespace JBO.Logic
{
    public class InstructorManagementLogic : IInstructorManagementLogic
    {
        private readonly IInstructorManagementRepository _instructorRepository;

        public InstructorManagementLogic(IInstructorManagementRepository instructorRepository)
        {
            _instructorRepository = instructorRepository;
        }
        public IEnumerable<Instructor> GetAll()
        {
            return _instructorRepository.GetAll();
        }

        public Instructor Get(int id)
        {
            return _instructorRepository.Get(id);
        }

        public void Add(Instructor entity)
        {
            _instructorRepository.Add(entity);
        }

        public void Delete(int id)
        {
            _instructorRepository.Delete(id);
        }

        public void Update(Instructor entity)
        {
            _instructorRepository.Update(entity);
        }
    }
}
