import { TestBed, inject } from '@angular/core/testing';

import { NfcPcscService } from './nfc-pcsc.service';

describe('NfcPcscService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NfcPcscService]
    });
  });

  it('should be created', inject([NfcPcscService], (service: NfcPcscService) => {
    expect(service).toBeTruthy();
  }));
});
