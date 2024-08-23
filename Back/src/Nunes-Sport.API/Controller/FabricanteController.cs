using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nunes_Sport.API.Data;
using Nunes_Sport.API.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class FabricantesController : ControllerBase
{
    private readonly AppDbContext _context;

    public FabricantesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Fabricante>>> GetFabricantes()
    {
        return await _context.Fabricantes.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Fabricante>> GetFabricante(int id)
    {
        var fabricante = await _context.Fabricantes.FindAsync(id);

        if (fabricante == null)
        {
            return NotFound();
        }

        return fabricante;
    }

    [HttpPost]
    public async Task<ActionResult<Fabricante>> PostFabricante(Fabricante fabricante)
    {
        _context.Fabricantes.Add(fabricante);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetFabricante), new { id = fabricante.Id }, fabricante);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutFabricante(int id, Fabricante fabricante)
    {
        if (id != fabricante.Id)
        {
            return BadRequest();
        }

        _context.Entry(fabricante).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!FabricanteExists(id))
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

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFabricante(int id)
    {
        var fabricante = await _context.Fabricantes.FindAsync(id);
        if (fabricante == null)
        {
            return NotFound();
        }

        _context.Fabricantes.Remove(fabricante);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool FabricanteExists(int id)
    {
        return _context.Fabricantes.Any(e => e.Id == id);
    }
}
