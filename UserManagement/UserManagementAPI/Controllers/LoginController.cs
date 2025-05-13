using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            //Validate the user name & pwd with db user name &pwd
            //If its not true send UnAuthorized

            //If Valid
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes("SuperSecretKey12345");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(Claimtype.Name, user.UserName),
                new Claim(ClaimTypes.Role, user.Role)}),
                Expires = DateTime.UtcNow.AddHours(1),
                Issuer = "TestIssuer",
                Audience = "TestAudience",
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256)};

                var token = tokenHandler.CreateToken(tokenDescriptor);

                return Ok(new {token = tokenHandler.WriteToken(toke)});

            });
            }
        }

        public class LoginRequest
        {
            public string UserName {get; set;}
            public string Password {get; set;
        }
    }
}
