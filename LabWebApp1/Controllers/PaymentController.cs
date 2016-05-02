using LabModel;
using LabRepository;
using LabService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LabWebApp1.Controllers
{
    public class PaymentController : BaseCommandController<Payment>
    {
        public PaymentController() : base(new PaymentService(new PaymentRepository(new LabDBContext())))
        {

        }
    }
}
