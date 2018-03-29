using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;

namespace JBO.Repository
{
    public class BaseRepository : IDisposable
    {
        protected IDbConnection SqlDB;


        public BaseRepository(IConfiguration config)
        {
            SqlDB = new SqlConnection(config.GetConnectionString("DefaultConnection"));
        }

        public void Dispose()
        {
            //throw new NotImplementedException();
        }
    }
}
