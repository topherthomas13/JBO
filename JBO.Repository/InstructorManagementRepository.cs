using Dapper;
using JBO.Entities.Entities;
using JBO.Repository.Interface;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using static System.Data.CommandType;

namespace JBO.Repository
{
    public class InstructorManagementRepository : BaseRepository, IInstructorManagementRepository
    {
        public InstructorManagementRepository(IConfiguration config) : base(config)
        {
        }

        public IEnumerable<Instructor> GetAll()
        {
            IList<Instructor> instructorList = SqlDB.Query<Instructor>("Management.GetInstructors", commandType: StoredProcedure).ToList();
            return instructorList;
        }

        public Instructor Get(int id)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", id);
            return SqlDB.Query<Instructor>("Management.GetInstructors", parameters, commandType: StoredProcedure).FirstOrDefault();
        }

        public void Add(Instructor entity)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@FullName", entity.FullName);
            SqlDB.Execute("Management.AddInstructor", parameters, commandType: StoredProcedure);
        }

        public void Delete(int id)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", id);
            SqlDB.Execute("Management.DeleteInstructor", parameters, commandType: StoredProcedure);
        }

        public void Update(Instructor entity)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", entity.Id);
            parameters.Add("@FullName", entity.FullName);
            parameters.Add("@isActive", entity.IsActive);
            SqlDB.Execute("Management.UpdateInstructor", parameters, commandType: StoredProcedure);
        }

        public void ChangeInstructorStatus(int id, bool status)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", id);
            parameters.Add("@isActive", status);
            SqlDB.Execute("Management.ChangeInstructorStatus", parameters, commandType: StoredProcedure);
        }
    }
}
