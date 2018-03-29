using JBO.Entities.Entities;
using JBO.Logic.Interface;
using Microsoft.AspNetCore.Mvc;

namespace JBO.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Project")]
    public class ProjectController : Controller
    {
        private readonly IProjectManagementLogic _projectManagementLogic;

        public ProjectController(IProjectManagementLogic projectManagementLogic)
        {
            _projectManagementLogic = projectManagementLogic;
        }

        [HttpGet]
        // get all projects!
        public IActionResult Get()
        {
            var projects = _projectManagementLogic.GetAll();
            return Ok(projects);
        }

        [HttpGet("{id}")]
        // get individual instructor by id
        public IActionResult Get(int id)
        {
            var project = _projectManagementLogic.Get(id);
            return Ok(project);
        }

        [HttpPost]
        // add new project to the database
        public IActionResult Post([FromBody] Project project)
        {
            _projectManagementLogic.Add(project);
            return Ok();
        }

        [HttpPut("{id}")]
        // update existing project
        public IActionResult Put(int id, [FromBody] Project project)
        {
            _projectManagementLogic.Update(project);
            return Ok();
        }

        [HttpDelete("{id}")]
        // logically delete specific project (sets bool value in database to false)
        public IActionResult Delete(int id)
        {
            _projectManagementLogic.Delete(id);
            return Ok();
        }
    }
}