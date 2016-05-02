using LabModel;
using LabService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LabWebApp1.Controllers
{
    public class PaymentQueryController : BaseQueryController<Payment>
    {
        public PaymentService paymentService;
        public LabDBContext Db;

        public PaymentQueryController()
        {
            paymentService = new PaymentService(new LabRepository.PaymentRepository(DB));
        }

        public IHttpActionResult Get()
        {
            return Ok(paymentService.GetAll());
        }
    }
}
