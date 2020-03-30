using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShellInfo.Todo.Models
{
    public class TodoDbContext :DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options):base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Ulogin> Ulogin { get; set; }
    }
}
