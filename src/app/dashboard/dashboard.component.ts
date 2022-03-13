import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { JsonLoadService } from '../services/json-load.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataJson =
    {
      data: [
        {
          text: "Communicate",
          value: "Communicate",
          checked: false,
          children: [
            {
              text: "Send Message",
              value: "Send Message",
              checked: false,
              children: [
                {
                  text: "Send Emails",
                  value: "Send Emails",
                  checked: false,
                },
                {
                  text: "Push Notifications",
                  value: "Push Notifications",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Messages",
              value: "Manage Messages",
              checked: false,
            }
          ]
        },
        {
          text: "Manage Leagues/Tournaments",
          value: "Manage Leagues/Tournaments",
          checked: false,
          children: [
            {
              text: "Create League/Tournament",
              value: "Create League/Tournament",
              checked: false,
            },
            {
              text: "Create League/Tournament",
              value: "Edit League/Tournament",
              checked: false,
            },
            {
              text: "Delete League/Tournament",
              value: "Delete League/Tournament",
              checked: false,
            },
            {
              text: "Team Manager",
              value: "Team Manager",
              checked: false,
              children: [
                {
                  text: "Create Team",
                  value: "Create Team",
                  checked: false,
                },
                {
                  text: "Edit Team",
                  value: "Edit Team",
                  checked: false,
                },
                {
                  text: "Delete Team",
                  value: "Delete Team",
                  checked: false,
                }
              ]
            },
            {
              text: "Match Manager",
              value: "Match Manager",
              checked: false,
              children: [
                {
                  text: "Create Match",
                  value: "Create Match",
                  checked: false,
                },
                {
                  text: "Edit Match",
                  value: "Edit Match",
                  checked: false,
                },
                {
                  text: "Update the Score",
                  value: "Update the Score",
                  checked: false,
                },
                {
                  text: "Cancel Match",
                  value: "Cancel Match",
                  checked: false
                },
                {
                  text: "Record the events in the match",
                  value: "Record the events in the match",
                  checked: false
                },
                {
                  text: "Update Respect Score (HKFA)",
                  value: "Update Respect Score (HKFA)",
                  checked: false
                }
              ]
            },
            {
              text: "Point Adjustment Manager",
              value: "Point Adjustment Manager", checked: false,
              children: [
                {
                  text: "Add Point Adjustment",
                  value: "Create Point Adjustment",
                  checked: false,
                },
                {
                  text: "Edit Point Adjustment",
                  value: "Edit Point Adjustment",
                  checked: false,
                },
                {
                  text: "Delete Point Adjustment",
                  value: "Delete Point Adjustment",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Venues",
              value: "Manage Venues",
              checked: false,
              children: [
                {
                  text: "Create Venue",
                  value: "Create Venue",
                  checked: false,
                },
                {
                  text: "Edit Venue",
                  value: "Edit Venue", checked: false,
                },
                {
                  text: "Delete Venue",
                  value: "Delete Venue", checked: false,
                }
              ]
            },
            {
              text: "Manage Team In League/Tournament",
              value: "Manage Team In League/Tournament",
              checked: false,
              children: [
                {
                  text: "Add Team In League/Tournament",
                  value: "Add Team In League/Tournament",
                  checked: false,
                },
                {
                  text: "Edit Team In League/Tournament",
                  value: "Edit Team In League/Tournament",
                  checked: false,
                },
                {
                  text: "Delete Team In League/Tournament",
                  value: "Delete Team In League/Tournament",
                  checked: false,
                }
              ]
            },
            {
              text: "Matches Report",
              value: "Matches Report",
              checked: false,
            }
          ]
        },
        {
          text: "Manage Certificates",
          value: "Manage Certificates",
          checked: false,
          children: [
            {
              text: "Create Certificate Form",
              value: "Create Certificate Form",
              checked: false,
            },
            {
              text: "Edit Certificate Form",
              value: "Edit Certificate Form",
              checked: false,
            },
            {
              text: "Delete Certificate Form",
              value: "Delete Certificate Form",
              checked: false,
            },
            {
              text: "Add Players who who achieved this certificate",
              value: "Add Players who who achieved this certificate",
              checked: false,
            }
          ]
        },
        {
          text: "Manage Organization Informations",
          value: "Manage Organization Informations",
          checked: false,
          children: [
            {
              text: "Code of Conduct",
              value: "Code of Conduct",
              checked: false,
            },
            {
              text: "Weather Policy",
              value: "Weather Policy",
              checked: false,
            },
            {
              text: "About",
              value: "About",
              checked: false,
            },
            {
              text: "Term Of Services and Private Policy",
              value: "Term Of Services and Private Policy",
              checked: false,
            },
            {
              text: "Health Guideline (HKFA)",
              value: "Health Guideline (HKFA)",
              checked: false,
            },
            {
              text: "Manage Sponsors",
              value: "Manage Sponsors",
              checked: false,
              children: [
                {
                  text: "Add Sponsor",
                  value: "Add Sponsor",
                  checked: false,
                },
                {
                  text: "Edit Sponsor",
                  value: "Edit Sponsor",
                  checked: false,
                },
                {
                  text: "Delete Sponsor",
                  value: "Delete Sponsor",
                  checked: false,
                }
              ]
            },
            {
              text: "Coaching Resources",
              value: "Coaching Resources",
              checked: false,
            },
            {
              text: "Manage Respect Document",
              value: "Manage Respect Document",
              checked: false,
              children: [
                {
                  text: "Add Respect Document",
                  value: "Add Respect Document",
                  checked: false,
                },
                {
                  text: "Edit Respect Document",
                  value: "Edit Respect Document",
                  checked: false,
                },
                {
                  text: "Delete Respect Document",
                  value: "Delete Respect Document",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Training Scheme Video",
              value: "Manage Training Scheme Video",
              checked: false,
              children: [
                {
                  text: "Add Training Scheme Group",
                  value: "Add Training Scheme Group",
                  checked: false,
                },
                {
                  text: "Edit Training Scheme Group",
                  value: "Edit Training Scheme Group",
                  checked: false,
                },
                {
                  text: "Remove Training Scheme Group",
                  value: "Remove Training Scheme Group",
                  checked: false,
                },
                {
                  text: "Manage Training Scheme Skill",
                  value: "Manage Training Scheme Skill",
                  checked: false,
                  children: [
                    {
                      text: "Add Training Scheme Skill",
                      value: "Add Training Scheme Skill",
                      checked: false,
                    },
                    {
                      text: "Edit Training Scheme Skill",
                      value: "Edit Training Scheme Skill",
                      checked: false,
                    },
                    {
                      text: "Remove Training Scheme Skill",
                      value: "Remove Training Scheme Skill",
                      checked: false,
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          text: "EZ Stream",
          value: "EZ Stream"
        },
        {
          text: "Manage Registrations",
          value: "Manage Registrations",
          children: [
            {
              text: "Manage Events",
              value: "Manage Events",
              checked: false,
              children: [
                {
                  text: "Add Event",
                  value: "Add Event",
                  checked: false,
                },
                {
                  text: "Edit Event",
                  value: "Edit Event",
                  checked: false,
                },
                {
                  text: "Delete Event",
                  value: "Delete Event",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Groups",
              value: "Manage Groups",
              checked: false,
              children: [
                {
                  text: "Add Group",
                  value: "Add Group",
                  checked: false,
                },
                {
                  text: "Edit Group",
                  value: "Edit Group",
                  checked: false,
                },
                {
                  text: "Delete Group",
                  value: "Delete Group", 
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Clubs",
              value: "Manage Clubs",
              checked: false,
              children: [
                {
                  text: "Add Club",
                  value: "Add Club",
                  checked: false,
                },
                {
                  text: "Edit Club",
                  value: "Edit Club",
                  checked: false,
                },
                {
                  text: "Manage Club Manager",
                  value: "Manage Club Manager",
                  checked: false,
                  children: [
                    {
                      text: "Add Club Manager",
                      value: "Add Club Manager",
                      checked: false,
                    },
                    {
                      text: "Edit Club Manager",
                      value: "Edit Club Manager",
                      checked: false,
                    },
                    {
                      text: "Delete Club Manager",
                      value: "Delete Club Manager",
                      checked: false,
                    }
                  ]
                },
                {
                  text: "Manage Player in Club",
                  value: "Manage Player in Club",
                  checked: false,
                  children: [
                    {
                      text: "Manage player in year group",
                      value: "Manage player in year group",
                      checked: false,
                      children: [
                        {
                          text: "Assign player to Year Group",
                          value: "Assign player to Year Group",
                          checked: false,
                        },
                        {
                          text: "Assign player to Team",
                          value: "Assign player to Team",
                          checked: false,
                        },
                        {
                          text: "Submit Team Sheet",
                          value: "Submit Team Sheet",
                          checked: false,
                        }
                      ]
                    }
                  ]
                },
                {
                  text: "Manage Group Coachs",
                  value: "Manage Group Coachs",
                  checked: false,
                  children: [
                    {
                      text: "Add Group Coach",
                      value: "Add Group Coach",
                      checked: false,
                    },
                    {
                      text: "Edit Group Coach",
                      value: "Edit Group Coach",
                      checked: false,
                    },
                    {
                      text: "Delete Group Coach",
                      value: "Delete Group Coach",
                      checked: false,
                    }
                  ]
                },
              ]
            },
            {
              text: "Manage Payments",
              value: "Manage Payments",
              checked: false,
              children: [
                {
                  text: "Send Reminder",
                  value: "Send Reminder",
                  checked: false,
                },
                {
                  text: "Mark as paid",
                  value: "Mark as paid",
                  checked: false,
                },
                {
                  text: "Refund",
                  value: "Refund",
                  checked: false,
                },
                {
                  text: "Update status",
                  value: "Update status",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage League Administrators",
              value: "Manage League Administrators",
              checked: false,
              children: [
                {
                  text: "Add League Administrator",
                  value: "Add League Administrator",
                  checked: false,
                },
                {
                  text: "Edit League Administrator",
                  value: "Edit League Administrator",
                  checked: false,
                },
                {
                  text: "Delete League Administrator",
                  value: "Delete League Administrator",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Users",
              value: "Manage Users",
              checked: false,
              children: [
                {
                  text: "Add User",
                  value: "Add User",
                  checked: false,
                },
                {
                  text: "Edit User",
                  value: "Edit User",
                  checked: false,
                },
                {
                  text: "Delete User",
                  value: "Delete User",
                  checked: false,
                },
                {
                  text: "Set Password",
                  value: "Set Password",
                  checked: false,
                },
                {
                  text: "Forgot Password",
                  value: "Forgot Password",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Parents",
              value: "Manage Parents",
              checked: false,
              children: [
                {
                  text: "Add Parent",
                  value: "Add Parent",
                  checked: false,
                },
                {
                  text: "Edit Parent",
                  value: "Edit Parent",checked: false,
                },
                {
                  text: "Delete Parent",
                  value: "Delete Parent",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Players",
              value: "Manage Players",
              checked: false,
              children: [
                {
                  text: "Edit Player",
                  value: "Edit Player",
                  checked: false,
                },
                {
                  text: "Delete Player",
                  value: "Delete Player",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Registrations",
              value: "Manage Registrations",
              checked: false,
              children: [
                {
                  text: "Register Player",
                  value: "Register Player",
                  checked: false,
                },
                {
                  text: "Validate Player",
                  value: "Validate Player",
                  checked: false,
                },
                {
                  text: "Change register Club",
                  value: "Change register Club",
                  checked: false,
                },
                {
                  text: "Approve full",
                  value: "Approve full",
                  checked: false,
                }
              ]
            },
            {
              text: "Manage Courses(HKFA)",
              value: "Manage Courses(HKFA)",
              checked: false,
              children: [
                {
                  text: "Add Course",
                  value: "Add Course",
                  checked: false,
                },
                {
                  text: "Edit Course",
                  value: "Edit Course",
                  checked: false,
                },
                {
                  text: "Delete Course",
                  value: "Delete Course",
                  checked: false,
                }
              ]
            },
            {
              text: "Registration Report",
              value: "Registration Report",
              checked: false,
            }
          ]
        }
      ]
    };

  config = {
    hasCollapseExpand: true,
    maxHeight: 500
  };

  value = 0;

  items: TreeviewItem[] = [];

  constructor() {
   
  }

  ngOnInit() {
    var data = this.dataJson.data;
    data.forEach(element => {
      this.items.push(new TreeviewItem({ ...element, collapsed: true, checked: false }));
    })
    
  }


  ngAfterViewInit()
  {
    $("input").removeClass("form-check-input");
  }

  onValueChange(event: any) {
    console.log(event);
  }

  onFilterChange(event: any) {
    console.log(event);
  }
}
