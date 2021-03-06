﻿using JBO.Entities.Entities;

namespace JBO.Repository.Interface
{
    public interface IProjectManagementRepository : IRepository<Project>
    {
        // any other additional methods required go in here...base CRUD operations are in generaic IRepository
        void ChangeProjectStatus(int id, bool status);
    }
}
