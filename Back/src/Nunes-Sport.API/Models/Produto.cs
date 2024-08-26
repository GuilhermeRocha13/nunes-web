using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nunes_Sport.API.Models
{
    public class Produto
    {
    public int Id { get; set; }
    public string Nome { get; set; }
    public int CodFabricante { get; set; }
    public int CodCategoria { get; set; }
    public string Descricao { get; set; }
    public decimal Preco { get; set; }
    public string ImagemURL { get; set; }
    }
}