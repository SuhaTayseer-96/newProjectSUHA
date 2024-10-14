import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from '../../../../URL-Service/url.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-subscription',
  templateUrl: './update-subscription.component.html',
  styleUrls: ['./update-subscription.component.css']
})
export class UpdateSubscriptionComponent implements OnInit {
  subscription: any = {};
  subscriptionId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private urlService: UrlService
  ) {
    this.subscriptionId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadSubscription();
  }

  loadSubscription(): void {
    this.urlService.GetSubscriptions(this.subscriptionId).subscribe({
      next: (data) => {
        this.subscription = data;
      },
      error: (error) => {
        console.error('Error fetching subscription:', error);
        Swal.fire('Error', 'Failed to load subscription details. Please try again.', 'error');
      }
    });
  }

  updateSubscription(): void {
    this.urlService.UpdateSubscription(this.subscriptionId, this.subscription).subscribe({
      next: () => {
        Swal.fire('Success', 'Subscription updated successfully', 'success');
        this.router.navigate(['/dash/display-subscriptions']);
      },
      error: (error) => {
        console.error('Error updating subscription:', error);
        Swal.fire('Error', 'Failed to update subscription. Please try again.', 'error');
      }
    });
  }
}