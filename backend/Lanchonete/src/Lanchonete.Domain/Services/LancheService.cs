using System;
using System.Collections.Generic;
using Lanchonete.Domain.Entities;
using Lanchonete.Domain.Repositories.Abstraction;
using Lanchonete.Domain.Services.Abstraction;

namespace Lanchonete.Domain.Services
{
    // TODO: For each method include proper validations and extra business rules;
    public class LancheService : ILancheService
    {
        private readonly ILancheRepository _repository;

        public LancheService(ILancheRepository repository)
        {
            _repository = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        public IEnumerable<Lanche> GetAll()
        {
            return _repository.GetAll();
        }

        public Lanche Add(Lanche lanche)
        {
            return _repository.Add(lanche);
        }

        public void Update(Guid id, Lanche lanche)
        {
            _repository.Update(id, lanche);
        }

        public void Remove(Guid id)
        {
            _repository.Remove(id);
        }
    }
}