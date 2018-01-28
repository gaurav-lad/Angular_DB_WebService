using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Test
{
    public class Country
    {
        public int Id { set; get; }
        public string Name { set; get; }
        public List<City> Cities { set; get; }
    }
}