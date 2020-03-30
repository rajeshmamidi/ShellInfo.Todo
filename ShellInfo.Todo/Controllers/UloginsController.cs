using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShellInfo.Todo.Models;

namespace ShellInfo.Todo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UloginsController : ControllerBase
    {
        private readonly TodoDbContext _context;

        public UloginsController(TodoDbContext context)
        {
            _context = context;
        }

        // GET: api/Ulogins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ulogin>>> GetUlogin()
        {
            return await _context.Ulogin.ToListAsync();
        }

        // GET: api/Ulogins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ulogin>> GetUlogin(int id)
        {
            var ulogin = await _context.Ulogin.FindAsync(id);

            if (ulogin == null)
            {
                return NotFound();
            }

            return ulogin;
        }

        // PUT: api/Ulogins/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUlogin(int id, Ulogin ulogin)
        {
            if (id != ulogin.Id)
            {
                return BadRequest();
            }

            _context.Entry(ulogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UloginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ulogins
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Ulogin>> PostUlogin(Ulogin ulogin)
        {
            _context.Ulogin.Add(ulogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUlogin", new { id = ulogin.Id }, ulogin);
        }

        // DELETE: api/Ulogins/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Ulogin>> DeleteUlogin(int id)
        {
            var ulogin = await _context.Ulogin.FindAsync(id);
            if (ulogin == null)
            {
                return NotFound();
            }

            _context.Ulogin.Remove(ulogin);
            await _context.SaveChangesAsync();

            return ulogin;
        }

        private bool UloginExists(int id)
        {
            return _context.Ulogin.Any(e => e.Id == id);
        }
    }
}
