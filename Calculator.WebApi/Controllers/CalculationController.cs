using System;
using System.Data;
using System.Threading.Tasks;
using Calculator.WebApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Calculator.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CalculationController : Controller
    {
        // GET api/calculate
        [HttpPost("calculate")]
        [EnableCors("AllowAll")]
        public async Task<IActionResult> CalculateAsync([FromBody]CalculationModel model)
        {
            try
            {
                var calcString = $"(({model.Value1}*{model.Value2})+{model.Value3})/{model.Value4}";

                var value = new DataTable().Compute(calcString, null).ToString();

                if (value != null)
                    return Ok(value);

                return BadRequest("Cannot be calculated!");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
