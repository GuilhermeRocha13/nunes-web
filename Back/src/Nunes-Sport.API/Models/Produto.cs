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
    public string CodFabricante { get; set; }
    public string CodCategoria { get; set; }
    public string Descricao { get; set; }
    public decimal Preco { get; set; }
    }
}