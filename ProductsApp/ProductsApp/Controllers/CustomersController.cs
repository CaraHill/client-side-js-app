using CustomerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CustomerApp.Controllers
{
    public class CustomerController : ApiController
    {
        Customer[] customers = new Customer[]
        {
            new Customer {Id =1, Name = "Saurav", Notes = "LHB"},
            new Customer {Id =2, Name = "Sehwag", Notes = "RHB"},
            new Customer {Id =3, Name = "Yuvi", Notes = "LHB"}

        };
        public IEnumerable<Customer> GetAllCustomers()
        {
            return customers;
        }
        public IHttpActionResult GetCustomer(int id)
        {
            var customer = customers.FirstOrDefault((c) => c.Id == id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

    }
}
