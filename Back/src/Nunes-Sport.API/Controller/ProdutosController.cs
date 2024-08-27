using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nunes_Sport.API.Data;
using Nunes_Sport.API.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class ProdutosController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProdutosController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
    {
        return await _context.Produtos.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Produto>> GetProduto(int id)
    {
        var produto = await _context.Produtos.FindAsync(id);

        if (produto == null)
        {
            return NotFound();
        }

        return produto;
    }

    [HttpPost]
    public async Task<ActionResult<Produto>> PostProduto([FromForm] Produto produto, [FromForm] IFormFile imagem)
    {
        if (imagem != null && imagem.Length > 0)
        {
            using (var memoryStream = new MemoryStream())
            {
                await imagem.CopyToAsync(memoryStream);
                produto.Imagem = memoryStream.ToArray();
            }
        }

        _context.Produtos.Add(produto);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProduto), new { id = produto.Id }, produto);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutProduto(int id, [FromForm] Produto produto, [FromForm] IFormFile imagem)
    {
        if (id != produto.Id)
        {
            return BadRequest();
        }

        if (imagem != null && imagem.Length > 0)
        {
            using (var memoryStream = new MemoryStream())
            {
                await imagem.CopyToAsync(memoryStream);
                produto.Imagem = memoryStream.ToArray();
            }
        }

        _context.Entry(produto).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProdutoExists(id))
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
    public async Task<IActionResult> DeleteProduto(int id)
    {
        var produto = await _context.Produtos.FindAsync(id);
        if (produto == null)
        {
            return NotFound();
        }

        _context.Produtos.Remove(produto);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ProdutoExists(int id)
    {
        return _context.Produtos.Any(produto => produto.Id == id);
    }
}
