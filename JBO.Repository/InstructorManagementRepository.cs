using Dapper;
using JBO.Entities.Entities;
using JBO.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static System.Data.CommandType;

namespace JBO.Repository
{
    public class InstructorManagementRepository : BaseRepository, IRepository<Instructor>
    {
        public void Add(Instructor entity)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@FullName", entity.FullName);
                SqlMapper.Execute(Con, "AddInstructor", param: parameters, commandType: StoredProcedure);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Delete(int id)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@id", id);
                SqlMapper.Execute(Con, "DeleteInstructor", param: parameters, commandType: StoredProcedure);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Instructor Get(int id)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@id", id);
                return SqlMapper.Query<Instructor>(Con, "GetInstructors", parameters, commandType: StoredProcedure).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Instructor> GetAll()
        {
            try
            {
                IList<Instructor> instructorList = SqlMapper.Query<Instructor>(Con, "GetInstructors", commandType: StoredProcedure).ToList();
                return instructorList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Update(Instructor entity)
        {
            try
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@CustomerID", entity.Id);
                parameters.Add("@CustomerName", entity.FullName);
                SqlMapper.Execute(Con, "UpdateInstructor", param: parameters, commandType: StoredProcedure);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
