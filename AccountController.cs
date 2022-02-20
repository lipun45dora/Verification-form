
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
               private readonly IMapper _mapper;

        public AccountController(  IMapper mapper)
        {
            _mapper = mapper;
      
           
        }
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            

            var user = _mapper.Map<AppUser>(registerDto);
            
            return new UserDto
            {
                Employeename=registerDto.Employeename
            };
          
               
        }

         
       
    }
}