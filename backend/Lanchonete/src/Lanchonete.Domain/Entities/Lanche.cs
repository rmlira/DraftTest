using System;
using System.Collections.Generic;

namespace Lanchonete.Domain.Entities
{
    public class Lanche
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public IEnumerable<Ingrediente> Ingredientes { get; set; }
    }
}