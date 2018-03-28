using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace JBO.Repository
{
    public class BaseRepository : IDisposable
    {
        protected IDbConnection Con;

        public BaseRepository()
        {
            Con = new SqlConnection("Data Source=MCX-BOYD;Initial Catalog=DefaultConnection;Integrated Security=True");
        }

        public void Dispose()
        {
            //throw new NotImplementedException();
        }
    }
}
