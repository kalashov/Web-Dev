import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.editTitle = album.title;
      this.loading = false;
    });
  }

  save(): void {
    if (!this.album) return;
    this.albumService.updateAlbum({ ...this.album, title: this.editTitle }).subscribe(updated => {
      this.album = updated;
      this.saved = true;
      setTimeout(() => this.saved = false, 2000);
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
