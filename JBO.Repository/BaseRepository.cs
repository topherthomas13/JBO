using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace JBO.Repository
{
    public class BaseRepository : IDisposable
    {
        IConfiguration config;
        protected IDbConnection con;

        public BaseRepository()
        {
            con = new SqlConnection(config.GetConnectionString("JBO_Dev"));
        }

        public void Dispose()
        {
            //throw new NotImplementedException();
        }
    }
}
