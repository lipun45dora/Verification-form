using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
       
        [Required]
        public string Employeename {get; set;}
       

        [Required]
        public string city {get; set;}
        
        [Required]
        
       
        public string emailaddress {get; set;}
        [Required]
        public long phone {get; set;}

         [Required]
        public int otp {get; set;}
        [Required]
        
       
        public string pannumber {get; set;}
       
        
        //public string Password {get; set;}
    }
}