using System;
using System.Collections.Generic;
using Lanchonete.Domain.Entities;
using Lanchonete.Domain.Services.Abstraction;
using Microsoft.AspNetCore.Mvc;

namespace Lanchonete.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LancheController : ControllerBase
    {
        private readonly ILancheService _service;

        public LancheController(ILancheService service)
        {
            _service = service ?? throw new ArgumentNullException(nameof(service));
        }

        [HttpGet]
        public IEnumerable<Lanche> GetAll()
        {
            return _service.GetAll();
        }

        [HttpPost]
        public Lanche Add
        (
            [FromBody] Lanche lanche
        )
        {
            return _service.Add(lanche);
        }

        [HttpPut("{id}")]
        public void Update
        (
            [FromRoute] Guid id,
            [FromBody] Lanche lanche
        )
        {
            _service.Update(id, lanche);
        }

        [HttpDelete("{id}")]
        public void Remove
        (
            [FromRoute] Guid id
        )
        {
            _service.Remove(id);
        }
    }
}