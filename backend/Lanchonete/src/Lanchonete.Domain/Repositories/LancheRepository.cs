using System;
using System.Collections.Generic;
using Lanchonete.Domain.Entities;
using Lanchonete.Domain.Repositories.Abstraction;

namespace Lanchonete.Domain.Repositories
{
    // NOTE: This is a fake in memory implementation of Database for dev purposes only
    // in a real-application consider using of a ORM like Dapper or Entity Framework for relational databases;

    public class LancheRepository : ILancheRepository
    {
        private readonly List<Lanche> _lanchesBd = new List<Lanche>();

        public IEnumerable<Lanche> GetAll()
        {
            return _lanchesBd;
        }

        public Lanche Add(Lanche lanche)
        {
            lanche.Id = Guid.NewGuid();
            _lanchesBd.Add(lanche);

            return lanche;
        }

        public void Update(Guid id, Lanche lanche)
        {
            Remove(id);
            lanche.Id = id;
            _lanchesBd.Add(lanche);
        }

        public void Remove(Guid id)
        {
            _lanchesBd.RemoveAll(x => x.Id == id);
        }
    }
}