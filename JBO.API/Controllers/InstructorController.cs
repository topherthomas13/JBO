using JBO.Entities.Entities;
using JBO.Logic.Interface;
using Microsoft.AspNetCore.Mvc;

namespace JBO.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Instructor")]
    public class InstructorController : Controller
    {
        private readonly IInstructorManagementLogic _instructorManagementLogic;

        public InstructorController(IInstructorManagementLogic instructorManagementLogic)
        {
            _instructorManagementLogic = instructorManagementLogic;
        }

        [HttpGet]
        // get all instructors!
        public IActionResult Get()
        {
            var instructors = _instructorManagementLogic.GetAll();
            return Ok(instructors);
        }

        [HttpGet("{id}")]
        // get individual instructor by id
        public IActionResult Get(int id)
        {
            var instructor = _instructorManagementLogic.Get(id);
            return Ok(instructor);
        }

        [HttpPost]
        // add new instructor to the database
        public IActionResult Post([FromBody] Instructor instructor)
        {
            _instructorManagementLogic.Add(instructor);
            return Ok();
        }

        [HttpPut("{id}")]
        // update existing instructor
        public IActionResult Put(int id, [FromBody] Instructor instructor)
        {
            _instructorManagementLogic.Update(instructor);
            return Ok();
        }

        [HttpDelete("{id}")]
        // logically delete specific instructor (sets bool value in database to false)
        public IActionResult Delete(int id)
        {
            _instructorManagementLogic.Delete(id);
            return Ok();
        }

        [HttpPut("{id}/{status}")]
        // updates the IsActive value of instructor
        public IActionResult Put(int id, bool status)
        {
            _instructorManagementLogic.ChangeInstructorStatus(id, status);
            return Ok();
        }
    }
}