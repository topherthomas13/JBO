using Dapper;
using JBO.Entities.Entities;
using JBO.Repository.Interface;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using static System.Data.CommandType;

namespace JBO.Repository
{
    public class ProjectManagementRepository : BaseRepository, IProjectManagementRepository
    {
        public ProjectManagementRepository(IConfiguration config) : base(config)
        {
        }

        public IEnumerable<Project> GetAll()
        {
            IList<Project> projectList = SqlDB.Query<Project>("Management.GetProjects", commandType: StoredProcedure).ToList();
            return projectList;
        }

        public Project Get(int id)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", id);
            return SqlDB.Query<Project>("Management.GetProjects", parameters, commandType: StoredProcedure).FirstOrDefault();
        }

        public void Add(Project entity)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@ProjectName", entity.ProjectName);
            parameters.Add("@ProjectDescription", entity.ProjectDescription);
            SqlDB.Execute("Management.AddProject", parameters, commandType: StoredProcedure);
        }

        public void Delete(int id)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", id);
            SqlDB.Execute("Management.DeleteProject", parameters, commandType: StoredProcedure);
        }

        public void Update(Project entity)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", entity.Id);
            parameters.Add("@ProjectName", entity.ProjectName);
            parameters.Add("@ProjectDescription", entity.ProjectDescription);
            SqlDB.Execute("Management.UpdateProject", parameters, commandType: StoredProcedure);
        }
    }
}
