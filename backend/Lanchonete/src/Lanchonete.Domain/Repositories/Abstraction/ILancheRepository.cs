using System;
using System.Collections.Generic;
using Lanchonete.Domain.Entities;

namespace Lanchonete.Domain.Repositories.Abstraction
{
    public interface ILancheRepository
    {
        public IEnumerable<Lanche> GetAll();

        public Lanche Add(Lanche lanche);

        public void Update(Guid id, Lanche lanche);

        public void Remove(Guid id);
    }
}